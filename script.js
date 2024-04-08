// python3 -m http.server 4444

var host = "cpsc484-01.stdusr.yale.internal:8888";

$(document).ready(function() {
  frames.start();
});

var frames = {
  socket: null,

  start: function() {
    var url = "ws://" + host + "/frames";
    frames.socket = new WebSocket(url);
    frames.socket.onmessage = function(event) {
      var command = frames.show(JSON.parse(event.data));
      if (command !== null) {
        console.log('hand')
        var d = document.getElementById('cursor');
        d.style.position = "absolute";
        d.style.left = command[0]/2+'px';
        d.style.top = command[1]/2+'px';
      }
      // frames.show(JSON.parse(event.data));
    };
  },

  show: function(frame) {
    // console.log(frame);
    // console.log('Frame.people!');\
    var command = null;
    if (frame.people.length < 1) {
      return command;
    }

    // Normalize by subtracting the root (pelvis) joint coordinates
    // var pelvis_x = frame.people[0].joints[0].position.x;
    // var pelvis_y = frame.people[0].joints[0].position.y;
    // var pelvis_z = frame.people[0].joints[0].position.z;
    var right_hand_x = (frame.people[0].joints[15].position.x) * -1;
    var right_hand_y = (frame.people[0].joints[15].position.y) * -1;
    var right_hand_z = (frame.people[0].joints[15].position.z) * -1;

    

    // if (right_hand_x < 200 && right_hand_x > -200) {
    //   if (right_hand_y > 500) {
    //     command = 73; // UP
    //   } else if (right_hand_y < 100) {
    //     command = 75; // DOWN
    //   }
    // } else if (right_hand_y < 500 && right_hand_y > 100) {
    //   if (right_hand_x > 200) {
    //     command = 76; // RIGHT
    //   } else if (right_hand_x < -200) {
    //     command = 74; // LEFT
    //   }
    // }
    command = [right_hand_x, right_hand_y, right_hand_z]
    return command;

  }
};
console.log("hello");