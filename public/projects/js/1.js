//main file

var block_size = 160;
let width_count;
let height_count;
var watches;

var x_cap = 360;
var y_cap = 360;
var z_cap = 360;
var u_cap = 360;
var v_cap = 360;
var col_cap = 254;

var mutation_rate = 0.02;

var rand_running = false;
var color_mode = "black";
var alt_color_mode = "white";



function start_random(){
  if (rand_running == true){
    frameRate(60);
    rand_running = false;
  }
  else{
    frameRate(10);
    rand_running = true;
  }
}

function flip_color_mode(){
  if (color_mode == "black"){
    // color_mode_button.style('value',"Dark theme");
    color_mode = "light";
    fill(color_mode);
    stroke('white');

  }
  else{
    // color_mode_button.style('value', "Light theme");
    color_mode = "black";
    fill(color_mode);
    stroke('black');
  }
}



function create_watches(x_rows,y_rows){
  watches = new Array(x_rows)
  for (let i=0; i<x_rows; i++){
    watches[i] = new Array(y_rows);
  }
  fill_watches([45,45,45,45,45,150,150,150]);
}

function fill_watches(m_lst){
  for (let i=0; i<watches.length; i++){
    for (let j=0; j<watches[0].length; j++){
      // filler = map(random(0,1),0,1,-5,5);
      watches[i][j] = new watch(i,j,m_lst);
      // console.log(filler);
    }
  }
}


function reportsize() {
  // resizeCanvas(windowWidth, windowHeight);
  // background('black');
  init();
}

window.addEventListener('resize',reportsize);

function mousePressed(){
  if (!rand_running){
    for (let i=0; i<watches.length ; i++){
      for (let j=0; j<watches[0].length; j++){
        rect(i*block_size,j*block_size,block_size);
        watches[i][j].selected();
      }
    }
  }
}

function selection(the_watch){
  the_mag = the_watch.mag_lst;
  fill_watches(the_mag);
}

function init(){
  ww = window.innerWidth;
  wh = window.innerHeight;
  canvas = createCanvas(ww,wh);
  background('black');
  canvas.position(0,0);
  canvas.style('z-index','-1');

  width_count = round(ww/block_size) + 2;
  height_count = round(wh/block_size) + 2;
  create_watches(width_count,height_count);


}

function setup(){
  var select_random = createButton("select random each generation");
  select_random.mousePressed(start_random);

  var color_mode_button = createButton("Light theme");
  color_mode_button.mousePressed(flip_color_mode);
  init();
  frameRate(30);
}

function draw(){
  if (rand_running == true){
    selection(watches[round(random(0, watches.length-1))][round(random(0,watches[0].length-1))])
  }
  if (color_mode == "black"){
    fill(color_mode);
    stroke('white');

  }
  else{
    fill(color_mode);
    stroke('black');
  }
  for (let i=0; i<watches.length ; i++){
    for (let j=0; j<watches[0].length; j++){
        // fill(color_mode);
        // stroke('white');
      rect(i*block_size,j*block_size,block_size);
      // stroke(watches[i][j].mag_lst[-3],watches[i][j].mag_lst[-2],watches[i][j].mag_lst[-1]);
      watches[i][j].show();
    }
  }
    // circle(mouseX,mouseY,20);
}



//watch function

function watch(x_count,y_count,mag_lst){
  // this.randomness = randomness;
  this.mag_x = mag_lst[0];
  this.mag_y = mag_lst[1];
  this.mag_z = mag_lst[2];
  this.mag_u = mag_lst[3];
  this.mag_v = mag_lst[4];
  this.col_r = mag_lst[5];
  this.col_g = mag_lst[6];
  this.col_b = mag_lst[7];
  this.mutation_rate = mutation_rate;
  this.x_position = x_count * block_size;
  this.y_position = y_count * block_size;
  this.center_x = this.x_position + block_size/2;
  this.center_y = this.y_position + block_size/2;

  this.x_mixval = this.mag_x + this.rander()*this.mutation_rate;
  this.y_mixval = this.mag_y + this.rander()*this.mutation_rate;
  this.z_mixval = this.mag_z + this.rander()*this.mutation_rate;
  this.u_mixval = this.mag_u + this.rander()*this.mutation_rate;
  this.v_mixval = this.mag_v + this.rander()*this.mutation_rate;
  this.col_r_mixval = this.col_r + this.rander()*100*this.mutation_rate;
  this.col_g_mixval = this.col_g + this.rander()*100*this.mutation_rate;
  this.col_b_mixval = this.col_b + this.rander()*100*this.mutation_rate;

  this.x_val = ((this.x_mixval < x_cap) && (this.x_mixval > 0)) ? this.x_mixval : ((this.x_mixval > x_cap) ? x_cap : 0 );
  this.y_val = ((this.y_mixval < y_cap) && (this.y_mixval > 0)) ? this.y_mixval : ((this.y_mixval > y_cap) ? y_cap : 0 );
  this.z_val = ((this.z_mixval < z_cap) && (this.z_mixval > 0)) ? this.z_mixval : ((this.z_mixval > z_cap) ? z_cap : 0 );
  this.u_val = ((this.u_mixval < u_cap) && (this.u_mixval > 0)) ? this.u_mixval : ((this.u_mixval > u_cap) ? u_cap : 0 );
  this.v_val = ((this.v_mixval < v_cap) && (this.v_mixval > 0)) ? this.v_mixval : ((this.v_mixval > v_cap) ? v_cap : 0 );
  this.col_r_val = ((this.col_r_mixval < col_cap) && (this.col_r_mixval > 20)) ? this.col_r_mixval : ((this.col_r_mixval > col_cap) ? col_cap : 20 );
  this.col_g_val = ((this.col_g_mixval < col_cap) && (this.col_g_mixval > 20)) ? this.col_g_mixval : ((this.col_g_mixval > col_cap) ? col_cap : 20 );
  this.col_b_val = ((this.col_b_mixval < col_cap) && (this.col_b_mixval > 20)) ? this.col_b_mixval : ((this.col_b_mixval > col_cap) ? col_cap : 20 );
  this.mag_lst = [ this.x_val , this.y_val , this.z_val, this.u_val, this.v_val, this.col_r_val, this.col_g_val, this.col_b_val];
  // this.root = new branch(createVector(block_size/2,block_size/2),createVector(block_size/2,block_size/8 + this.rander()));
  // this.root = new branch(createVector(this.center_x,this.center_y),createVector(this.center_x + block_size/2,this.center_y + block_size/8 + this.rander()));
  this.root = new branch(createVector(this.center_x,this.center_y - block_size/4),createVector(this.center_x, this.center_y + block_size/4 + this.rander()*this.mutation_rate - block_size/4));
  this.branches = [this.root.brancher(this.v_val),this.root.brancher(-this.v_val)]
  for (let i=0; i<4; i++){
    for (let j=this.branches.length-1; j>=0; j--){
      if (!this.branches[j].finished){
        this.branches.push(this.branches[j].brancher(this.mag_lst[i]));
        this.branches.push(this.branches[j].brancher(-this.mag_lst[i]));
      }
      this.branches[j].finished = true;
    }
  }
}

watch.prototype.rander = function(){
    return randomGaussian(0,10);
}

watch.prototype.show = function(){
  // fill(this.mag_lst[2],this.mag_lst[3],this.mag_lst[4]);
  // ellipse(this.center_x,this.center_y,this.mag_lst[0],this.mag_lst[1]);
  thel = this.mag_lst.length;
  stroke(this.mag_lst[thel-3],this.mag_lst[thel-2],this.mag_lst[thel-1]);
  // stroke('red');
  // strokeWeight(5);
  for (var i=0; i<this.branches.length; i++){
    this.branches[i].show();
  }
}

watch.prototype.selected = function(){
  m_distance = dist(mouseX,mouseY,this.center_x,this.center_y);
  if (m_distance < block_size/2){
    selection(this);
  }
}




//polymorph function

function polymorph(){
  ang_lst = [45,30,100,90,40];
  this.root = new branch(createVector(80,160),createVector(80,80));
  this.branches = [this.root.brancher(ang_lst[-1]),this.root.brancher(-ang_lst[-1])];
  for (let i=0; i<4; i++){
    for (let j=this.branches.length-1; j>=0; j--){
      if (!this.branches[j].finished){
        this.branches.push(this.branches[j].brancher(ang_lst[i]));
        this.branches.push(this.branches[j].brancher(-ang_lst[i]));
      }
      this.branches[j].finished = true;
    }
  }

}

polymorph.prototype.show = function(){
  for (var i=0; i<this.branches.length; i++){
    this.branches[i].show();
  }
}


function branch(begin,end){
  this.begin = begin;
  this.end = end;
  this.finished = false;

  this.show = function(){
    line(this.begin.x,this.begin.y,this.end.x,this.end.y);
  }

  this.brancher = function(ang){
      var dir = p5.Vector.sub(this.end, this.begin);
      dir.rotate(ang);
      dir.mult(0.6);
      var new_end = p5.Vector.add(this.end,dir);

      var r = new branch(this.end,new_end);
      return r;
  }

  // this.branchb = function(){
  //     var dir = p5.Vector.sub(this.end, this.begin);
  //     dir.rotate(-ang);
  //     var new_end = p5.Vector.add(this.end,dir*0.5);
  //
  //     var l = new branch(this.end,new_end);
  //     return l;
  // }
}
