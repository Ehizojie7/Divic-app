import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { filterData } from '../../FilterProps'

const Filters = ({bottomSheetModalRef}:any) => {
  return (
    <View className='px-4'>
      <View className='flex-row items-center py-2 justify-between border-b border-[#f5f5f5]'> 
      <TouchableOpacity onPress={() => bottomSheetModalRef.current?.close()}>
        <Text className='text-[#2F50C1] text-base font-semibold'>
          Cancel
        </Text>
      </TouchableOpacity>
      <Text className='text-[18px] font-bold'>Filters</Text>
      <TouchableOpacity>
        <Text className='text-[#2F50C1] text-base font-semibold'>
          Done
        </Text>
      </TouchableOpacity>
      </View>

      {/* Filter Body */}
      <View className='mt-2'>
        <Text className='text-[#58536E] text-sm font-medium'>
        SHIPMENT STATUS
        </Text>

        <View className=' mt-2 flex-row items-center flex-wrap' style={{gap: 20}}>
      {
        filterData?.map((item) => (
          <TouchableOpacity 
          className='px-4 py-2 bg-[#F4F2F8] rounded '
          key={item?.id}>
            <Text className='text-base text-[#58536E]'>{item?.name}</Text>
          </TouchableOpacity>
        ))
      }
      </View>
      </View>
    </View>
  )
}

export default Filters