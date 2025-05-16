
    <h2>Find Overdue Task</h2>
    
        function findOverDueTask(tasks) {
            const today = new Date();

            return tasks.find(task => {
                const dueDate = new Date(task.dueDate);
                return dueDate < today;
            })
        }

        const tasks = [
            { taskName: 'Task 1', dueDate: '2023-06-01' },
            { taskName: 'Task 2', dueDate: '2024-05-01' },
            { taskName: 'Task 3', dueDate: '2024-01-01' }
        ];

        const overDueTask = findOverDueTask(tasks);
        console.log(overDueTask);

   
