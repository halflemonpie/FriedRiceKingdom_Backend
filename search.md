# two ways to search 

Welcome to Yonghai's Mini Lesson.

## Frontend way

Do it from the contend

1. Set up the state for the data, you will need two states to share the same information, and you will know why

   ```react
   const [data, setData] = useState([]);
   const [dataRaw, setDataRaw] = useState([]);
   ```

2. Set up a input field for search bar

   ```js
   import React from "react";
   
   export default function CatFilterBar ({handleFilterChange}) {
       return (
           <input type="text" name="category-filter" placeholder="filter by category"/>
       )
   }
   ```

3. Render it in the right component

   ```html
   <CatFilterBar />
   ```

4. create a filter function with .filter

   ```react
   const handleFilterChange = (e) => {
       console.log("filter called");
       filteredProjects = data.filter((project) => {
         // what this line does is that it compare the value of the input field to the value of the state, if match return projects that match the value
       return (project.category.toLowerCase().includes(e.target.value.toLowerCase()))
     })
     		// set the data to new filtered array
       setData(filteredProjects)
     }
   ```

5. Pass the function

   ```react
   <CatFilterBar handleFilterChange={handleFilterChange}/>
   ```

   ```react
   import React from "react";
   
   export default function CatFilterBar ({handleFilterChange}) {
       return (
         	// everytime you change the input it is going to call the filter function
           <input onChange={handleFilterChange} type="text" name="category-filter" placeholder="filter by category"/>
       )
   }
   ```

6. Working right now!! Yay!!

7. Actually, No.

8. wIth this you can't get the projects back even if  you delete your filter to empty, which is why you need to set the filter array back to normal state every time you filter. Then, in this case you need two states that  have the same information. One is for filter, another one is for reference. It will become something like this:

   ```react
   const handleFilterChange = (e) => {
       console.log("filter called");
       // map the original data instead of the filtered data
       let filteredProjects = dataRaw.filter((project) => {
       return (project.category.toLowerCase().includes(e.target.value.toLowerCase()))
     })
       setData(filteredProjects)
     }
   ```

9. Now it is working. You can just map data to render the filtered information!





## Backend Way

Reference: the react class where we filter fruits https://git.generalassemb.ly/Spartans/lifting-state-practice

1. I used regular expression/regex for this method, if you don't know what it is, just google it. It is just a way to search without exact math of the content.

2. Set up the controller first

   ```js
   showName: (req, res) => {
     // this line basically says that i want to find all the project that match my params without being exact match, and it is not case sensitive
           Project.find({name: { $regex: req.params.name, $options: 'i' }}).then((projects) => {
             res.json(projects)
           })
         }
   ```

3. set up my route

   ```js
   router.get('/name/:name', projectController.showName)
   ```

4. that's done for backend, you can do a search with postman now with url like

   ```
   http://localhost:8080/projects/name/h
   ```

   it will show you all the projects that has "h" inside

5. Now lets move to the frontend part. Again, setup the component and tag

   ```js
   <NameFilterBar handleNameFilter={handleNameFilter}/>
   ```

   ```js
   import React from "react";
   
   export default function NameFilterBar ({handleNameFilter}) {
       return (
           <input onChange={handleNameFilter} type="text" name="name-filter" placeholder="filter by name here"/>
       )
   }
   ```

6. Now let's look at our filter function for this method

   ```js
   const handleNameFilter = (e) => {
       console.log(e.target.value);
     	// call the api with the input that you have, which is e.target.value
         axios.get(`http://localhost:8080/projects/name/${e.target.value}`)
         .then((res) => {
           console.log(res);
           // then just set the data into the filtered projects
           setData(res.data)
           
         })
     }
   ```

7. Done. Simple. But the problem right now is that when you have nothing inside your input field or you have some special character like "( " ")", you backend is going to crash because of the bad request!!!

   You need to avoid that by conditions. And this part also use regex to do that.

   ```js
   const handleNameFilter = (e) => {
       console.log(e.target.value);
     	// put black list special characters in to the regex
       const blackListChar = /[()\\\|\/\[\]\{\}*%]/i;
     
     	// when the input is empty just get all data for projects
       if (e.target.value == "" ) {
         axios.get(`http://localhost:8080/projects/`)
         .then((res) => {
           console.log(res);
           setData(res.data)
         })
         
        // if the input has special characters do nothing
       } else if (blackListChar.test(e.target.value)) {
   
         // else send the filter reuqest
       } else {
         axios.get(`http://localhost:8080/projects/name/${e.target.value}`)
         .then((res) => {
           console.log(res);
           setData(res.data)
         })
       }
     }
   ```

8. Done. Nice!