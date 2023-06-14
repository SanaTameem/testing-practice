const stringLength = (string) => {
    if(string.length>1 && string.length<10){
        return string.length;
    }else{
        return new Error('String should be between 1 and 10 chars');
    };
};
module.exports = stringLength;