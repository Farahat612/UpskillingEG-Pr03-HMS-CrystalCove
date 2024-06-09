import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAddData, useFetchAllData } from '../../hooks/admin'

type AddRoomFormData = {
  roomNumber: string
  price: number
  capacity: number
  discount: number
  imgs: File[]
  facilities: string[]
}
const useAddRoom = () => {
  const { data: facilities } = useFetchAllData(
    '/admin/room-facilities',
    'facilities'
  )
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    reset,
  } = useForm<AddRoomFormData>()

  const facilityNamesById = facilities.reduce((obj, facility) => {
    obj[facility._id] = facility.name
    return obj
  }, {})

  // State to store the image previews
  const [images, setImages] = useState<File[]>([])

  // Function to handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)

      // Store the previous images and append the new ones
      setImages((prevImages) => prevImages.concat(filesArray))

      // Reset the value of the input element
      e.target.value = ''
    }
  }

  const removeImagePreview = (index: number) => {
    setImages((prevImages) => prevImages.filter((_image, i) => i !== index))
  }

  const { addData } = useAddData({ endpoint: 'rooms' })

  const onSubmit = async (data: AddRoomFormData) => {
    const formData = new FormData()
    formData.append('roomNumber', data.roomNumber)
    formData.append('price', data.price.toString())
    formData.append('capacity', data.capacity.toString())
    formData.append('discount', data.discount.toString())
    images.forEach((image) => formData.append('imgs', image))
    data.facilities.forEach((facility) =>
      formData.append('facilities', facility)
    )

    await addData(formData)
    reset()
    setImages([])
  }

  const navigate = useNavigate()
  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    control,
    reset,
    facilityNamesById,
    handleFileChange,
    removeImagePreview,
    onSubmit,
    navigate,
    images,
    facilities,
    setImages,
  }
}

export default useAddRoom
