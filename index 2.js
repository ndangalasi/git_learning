    function chunkArrayInGroups(arr, size) {
      // Break it up.
      var arr2 = [];
      for (var i = 0; i < arr.length; i+=size) {
        console.log(i)
    	arr2.push(arr.slice(i , i+size));
      }
      return arr2;
    }
chunkArrayInGroups(["a", "b", "c", "d","e","f","g"], 2);