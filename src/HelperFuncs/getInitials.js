export const getInitials = (user) =>{
    if(!user) return null;
const fullName = user.name.split('');
const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
return initials
}