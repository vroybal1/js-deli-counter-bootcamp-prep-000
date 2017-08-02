var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(array) {
  if (array.length >= 1) {
       var message = "Currently serving " + array[0] + ".";
       array.shift()
       return message
} else {
    return "There is nobody waiting to be served!"
    }

}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var array = [];
    for (var i = 0; i < katzDeliLine.length; i++) {

        array.push(" "+ (i+1)  + ". " + katzDeliLine[i])
      }

        return "The line is currently:" + array

  }
}
