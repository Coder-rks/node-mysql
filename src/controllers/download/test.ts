process.on('message',async(batch_parameters)=>{
    try{
        console.log(batch_parameters);
        (<any> process).send(true);
    }catch(err){
        (<any> process).send(false);
    }finally {
        process.exit();
    }
})