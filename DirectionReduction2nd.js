function dirReduc(plan) {
    var opposite = { 'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST' };
    return plan.reduce(function(dirs, dir){
        if (dirs[dirs.length - 1] === opposite[dir])
          dirs.pop();   
        else
          dirs.push(dir);
        return dirs;
      }, []);
  }


  console.log(dirReduc(["NORTH", 'WEST', "SOUTH", 'WEST', 'NORTH', 'SOUTH', 'EAST']))