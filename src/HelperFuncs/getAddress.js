export const getAddress = (user) =>{
  if(!user) return "UNKNOWN"
  const {city,street,suite,zipcode} = user.address;
  return suite+', '+street+', '+city+', '+zipcode
}