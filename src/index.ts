//Intersection Type
type draggable={
  drag:()=>void
}

type resizable= {
  resize:()=>void
}

type UIWidget=draggable & resizable

let textBox:UIWidget={
  drag:()=>{},
  resize:()=>{}
}