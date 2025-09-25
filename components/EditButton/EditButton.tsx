'use client'

const EditButton = () => {
  const handleCLick = () => {
    console.log('EDIT')
  }
  return <button onClick={handleCLick}>Edit</button>
}

export default EditButton
