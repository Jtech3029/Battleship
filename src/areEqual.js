function areEqual(array1, array2) {
    let N = array1.length;
    let M = array2.length;
    if (N != M) return false;
  
    for (let i = 0; i < N; i++) if (array1[i] != array2[i]) return false;
  
    return true;
  }

export default areEqual;