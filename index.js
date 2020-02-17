function takeANumber (line, name)
{
  line.push(name);
  //adds the person's name to the end of line 
  var length = line.length;
  //the person's position in line will be the length of line because they are the last person in line
  return `Welcome, ${name}. You are number ${length} in line.`;
}

function nowServing(line)
{
  if (line[0])
  //checks to see if someone is in line
  {
    var newLine = line[0];
    //stores first person in line in a new variable so that they can be removed from the original line
    line.shift();
    return `Currently serving ${newLine}.`;
  }
  else
  {
    return `There is nobody waiting to be served!`;
  }
}

function currentLine (line)
{
  if (line[0])
  {
    var y;
    //this variable will be used in the loop to store each name and place in line.
    var z = (``);
    //empty string to be used with the concat function.
    for (let n = 0; n < line.length; n++)
    {
      y = (`${n + 1}. ${line[n]}`); 
      z = z.concat(y);
      if (n != (line.length - 1))
      //need a comma for each person, except the last person in line
      {
        z = z.concat(`, `);
      }
    }
    return (`The line is currently: ${z}`);
  }
  else
  {
    return `The line is currently empty.`;
  }
}

var number = 7;
function assignANumber(line)
{
 var newNumber = number++;
 line.push(newNumber);
 var length = line.length;
 return `Welcome customer #${newNumber}, you are number ${length} in line.`;
}