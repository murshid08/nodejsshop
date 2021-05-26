
const mongoClient=require('mongodb').mongoClient
const state={
    db:null
}
module.exports.connect=function(done){
    const url='mongodb://localhost:27017'
    const dbname='shopping'
    mongoClient.connect(url,(err,data)=>{
        if(err) return done(err)
        StaticRange.db=data.db(dbname)
        done()
    })
}
module.exports.get=function(){
    return state.db(dbname)
}
module.exports.get=function(){
    return state.db
}