 const cssToJson = (param) => {
  
    let arr = param.split(";");
  
    let total = "";
    let arrlen = 0;
    for (let vall of arr) {
      arrlen++;
      if (vall) {
        let key = "";
        let value = "";
        let pos = vall.indexOf(":");
        if (pos >= 0) {
          key = vall.slice(0, pos);
          value = vall.slice(pos + 1);
          key = key.trim();
          value = value.trim();
  
          let hypPos = key.indexOf("-");
          if (hypPos >= 0) {
            key = key.replace("-", "");
            let upperChar = key.charAt(hypPos).toUpperCase();
  
            let key1 = key.slice(0, hypPos);
            let key2 = key.slice(hypPos + 1);
            key = key1.trim() + upperChar.trim() + key2.trim();
          }
          hypPos = key.indexOf("-");
  
          if (hypPos >= 0) {
            key = key.replace("-", "");
            let upperChar = key.charAt(hypPos).toUpperCase();
  
            let key1 = key.slice(0, hypPos);
            let key2 = key.slice(hypPos + 1);
            key = key1.trim() + upperChar.trim() + key2.trim();
          }
  
          let jsonObjFormat = "";
  
          jsonObjFormat = '"' + key + '":"' + value + '",';
          total += jsonObjFormat;
        }
      }
    }
  
    let lstt = total.slice(-1);
    if (lstt === ",") {
      total = total.slice(0, -1);
    }
  
    let jsonObj = "{" + total + "}";
    return JSON.parse(jsonObj);
  };





  export default cssToJson;