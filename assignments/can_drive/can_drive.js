function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if(hasDrivingLiscence){
        if(!isTired){
            if(isSober){
                return "You can drive"
            }else{
                return "You shouldn't drive"
            }
        }else{
            return "You shouldn't drive"
        }
    }else{
        return "You cannot drive"
    }
}

module.exports = CanDrive;
