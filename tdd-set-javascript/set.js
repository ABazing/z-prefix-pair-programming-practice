class GalvanizeSet {
  constructor(Size) {
    this.Size = [];
  }

  getSize(){
    return this.Size.length;
  }

  insert(num){
    if(this.contains(num) == false){
      this.Size.push(num);
    }
  }

  contains(num){
    for(let i = 0; i < this.Size.length; i++){
      if(this.Size[i] == num){
        return true
      }
    }
    return false;
  }

  delete(num){
    let check = false;
    for(let i = 0; i < this.Size.length; i++){
      if(this.Size[i] == num){
        this.Size.splice(i, 1)
        check = true;
      }
    }
    if(check == true){
      return true;
    }
    else{
      return false;
    }
  }

}

module.exports = GalvanizeSet