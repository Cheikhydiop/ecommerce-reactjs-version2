function Image() {
     return (
       <div className="relative shadow-lg bg-white bg-opacity-50 p-3 sm:bg-transparent sm:bg-opacity-0">
         <img
           src="https://melvynx.com/images/my-face.png"
           alt=""
           className="lg:mr-44 lg:-mt-40 lg:float-right lg:h-64 lg:w-64 hover:rotate-45 lg:ease-in
           [clip-path:circle()] [shape-outside:circle()]"
         />
       </div>
     );
   }
   
   export default Image;
   