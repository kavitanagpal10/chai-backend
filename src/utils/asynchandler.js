


// const asyncHandler = () => {}
// const asyncHandler = (fn) => () => {}
// const asyncHandler = (fn) => async() => {}
    // two type of asycnch handler try and catch and promise

 /* asysnch handeler type II promise*/ 
 const asynchHandler =(requesthandler) => {
      (req, res, next) =>{
        Promise.resolve(requesthandler(req, res, next)). catch((err) => next(err))

    }
 }

 export{asynchHandler}// higher order function




  /* asysnch handeler type I* try and catch/
    // const asyncHandler = (fn) => async(req , res, next) => {
    //     try{
    //         await fn(req, res, next)

    //     } catch(error){ 
    //         res.status(error.code || 500).json({
    //             success: false, // success flag
    //             message:err.message
    //         })

    //     }
    // }