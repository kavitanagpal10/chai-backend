class ApiError extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
        errors =[],// for multiple error we passed array
        stack = ""        

    ){
   super(message)// if we want to overtite we can addd here
   this.statusCode = statusCode
   this.data = null
   this.message = message
   this.success = false;
   // er are handling API error not response 
   this.errors = errors
  
   if(stack){
    this.stack = stack
 } else{
    Error.captureStackTrace(this, this.constructor)
 }
    }
}

export{ApiError}