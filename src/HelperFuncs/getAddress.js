export const getAddress = (user) =>{
  if(!user) return "UNKNOWN"
  console.log(user.address);
  const {city,street,suite,zipcode} = user.address;
  return suite+', '+street+', '+city+', '+zipcode
}