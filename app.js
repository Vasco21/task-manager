const express = require('express');
const app = express();


// routes
app.get('/hello', (req, res) =>{
    res.send('Task manager App')
})

// app.get('/api/v1/tasks')            - get all the tasks
// app.post('/api/v1/tasks')           - create a new task
// app.get('/api/v1/tasks/:id')        - get single task
// app.patch('/api/v1/tasks/:id')      - uddate task
// app.delete('/api/v1/tasks/:id')     - delete task  



const PORT =  process.env.PORT || 4000;

 app.listen(PORT, function() {
	console.log(`TaskApp ${PORT}...`)
});