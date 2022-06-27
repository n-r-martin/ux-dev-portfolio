function duplicateItem(arr) {
    let itemCountObj = {};
     let rolesDoubled = []
     for (let i = 0; i < arr.length; i++) {
       const item = arr[i];
       itemCountObj[item] = itemCountObj[item] + 1 || 1;
       if (itemCountObj[item] >= 2) {
         rolesDoubled.push(item);
       }
     }
     return rolesDoubled;
}

export default duplicateItem;