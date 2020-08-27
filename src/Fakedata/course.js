var courses = [
    {
        "key" : 1, "name" : "Complete Web Development", "author" : "Jhankar Mahbub", price : 40.99, "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed odio morbi quis commodo odio aenean sed adipiscing diam. At urna condimentum mattis pellentesque. In fermentum et sollicitudin ac orci phasellus. Libero justo laoreet sit amet cursus sit amet dictum sit.",
        "rating" : 4.5, "category" : "Web Development", "image" : "https://www.jenyalestina.com/blog/wp-content/uploads/2019/05/web-development.jpg"
    },
    {
        "key" : 2, "name" : "Complete Frontend Development", "author" : "Andrew Mead", price : 20.99, "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque egestas congue quisque egestas diam in arcu cursus. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Diam maecenas ultricies mi eget mauris. Diam donec adipiscing tristique risus nec feugiat in fermentum.",
        "rating" : 4.5, "category" : "Web Development", "image" : "https://www.jenyalestina.com/blog/wp-content/uploads/2019/05/web-development.jpg"
    },
    {
        "key" : 3, "name" : "Complete Backend Development", "author" : "Andrew Mead", price : 30.99, "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Sed augue lacus viverra vitae congue eu consequat ac felis. Erat nam at lectus urna duis convallis convallis tellus.",
        "rating" : 4.5, "category" : "Web Development", "image" : "https://www.jenyalestina.com/blog/wp-content/uploads/2019/05/web-development.jpg"
    },
    {
        "key" : 4, "name" : "8086 Architecture", "author" : "Rishadul Arefin", price : 20.99, "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque egestas congue quisque egestas diam in arcu cursus. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Diam maecenas ultricies mi eget mauris. Diam donec adipiscing tristique risus nec feugiat in fermentum.",
        "rating" : 4.5, "category" : "Embedded System", "image" : "https://beningo-embedded-group.s3.amazonaws.com/2017/11/AdobeStock_79790508-825x510.jpeg"
    },
    {
        "key" : 5, "name" : "Arduino for Beginners", "author" : "Asif Neeloy", price : 10.99, "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum arcu vitae elementum curabitur vitae nunc sed. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Nunc sed id semper risus in hendrerit gravida.",
        "rating" : 4.5, "category" : "Embedded System", "image" : "https://beningo-embedded-group.s3.amazonaws.com/2017/11/AdobeStock_79790508-825x510.jpeg"
    },
    {
        "key" : 6, "name" : "Raspberry Pi for Beginners", "author" : "Asif Neeloy", price : 15.99, "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Amet aliquam id diam maecenas ultricies mi eget mauris. Suscipit adipiscing bibendum est ultricies. Rutrum quisque non tellus orci ac auctor augue.",
        "rating" : 4.5, "category" : "Embedded System", "image" : "https://beningo-embedded-group.s3.amazonaws.com/2017/11/AdobeStock_79790508-825x510.jpeg"
    },
    {
        "key" : 7, "name" : "Java Masterclass", "author" : "Rajesh Palit", price : 40.99, "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Sed augue lacus viverra vitae congue eu consequat ac felis. Erat nam at lectus urna duis convallis convallis tellus.",
        "rating" : 4.5, "category" : "Programming Language", "image" :"https://www.simplilearn.com/ice9/free_resources_article_thumb/Best-Programming-Languages-to-Start-Learning-Today.jpg"
    },
    {
        "key" : 8, "name" : "Mastering Linux", "author" : "Rajesh Palit", price : 10.99, "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Sed augue lacus viverra vitae congue eu consequat ac felis. Erat nam at lectus urna duis convallis convallis tellus.",
        "rating" : 4.5, "category" : "DevOps", "imgae" : "https://cdn.mos.cms.futurecdn.net/LJSA6h759BKJvuaBZyoUY-320-80.jpg"
    },
    {
        "key" : 9, "name" : "Ethereum / Blockchain Technology", "author" : "Bahalul Pallab", price : 25.99, "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum arcu vitae elementum curabitur vitae nunc sed. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Nunc sed id semper risus in hendrerit gravida.",
        "rating" : 4.5, "category" : "Cryptocurrency", "image" : "https://lh3.googleusercontent.com/proxy/z35PR4Ts7DLHfocMSeDo38m65O-GfdtAoOctD6-dCj7M3d_MVr5T9JYPqD320jeDpUjJitsNjkN-Kuwcaf5CUhynuxHMwKY"
    },
    {
        "key" : 10, "name" : "Python with Projects", "author" : "Shawon Ashraf", price : 40.99, "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Sed augue lacus viverra vitae congue eu consequat ac felis. Erat nam at lectus urna duis convallis convallis tellus.",
        "rating" : 4.5, "category" : "Programming Language", "image" :"https://www.simplilearn.com/ice9/free_resources_article_thumb/Best-Programming-Languages-to-Start-Learning-Today.jpg"
    },
    {
        "key" : 11, "name" : "Discreete Mathematics", "author" : "Silvia Ahmed", price : 10.99, "description" : "aLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel pharetra vel turpis nunc eget lorem. Sed elementum tempus egestas sed sed risus pretium quam. Non sodales neque sodales ut etiam sit. Lacinia quis vel eros donec ac.",
        "rating" : 4.5,  "category" : "Mathematics", "image" : "https://studyqa.com/media/upload/articles/images/Pure-mathematics-formul%C3%A6-blackboard%5B1%5D.jpg"
    },
    {
        "key" : 12, "name" : "Engineering Economics", "author" : "John Doe", price : 6.99, "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Amet aliquam id diam maecenas ultricies mi eget mauris. Suscipit adipiscing bibendum est ultricies. Rutrum quisque non tellus orci ac auctor augue.",
        "rating" : 4.5, "category" : "Economics", "image" : "https://studyqa.com/media/upload/articles/images/Pure-mathematics-formul%C3%A6-blackboard%5B1%5D.jpg"
    },
    {
        "key" : 13, "name" : "SEO for Beginners", "author" : "Traversy Media", price : 10.99,"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec feugiat nisl pretium fusce id velit ut. Tortor pretium viverra suspendisse potenti nullam ac.",
        "rating" : 4.5, "category" : "Web Development", "image" : "https://www.jenyalestina.com/blog/wp-content/uploads/2019/05/web-development.jpg"
    },
    {
        "key" : 14, "name" : "Complete NodeJs Masterclass", "author" : "Andrew Mead", price : 30.99, "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel pharetra vel turpis nunc eget lorem. Sed elementum tempus egestas sed sed risus pretium quam. Non sodales neque sodales ut etiam sit. Lacinia quis vel eros donec ac",
        "rating" : 4.5, "category" : "Web Development", "image" : "https://www.jenyalestina.com/blog/wp-content/uploads/2019/05/web-development.jpg"
    },
    {
        "key" : 15, "name" : "GraphQL", "author" : "Andrew Mead", price : 20.99, "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec feugiat nisl pretium fusce id velit ut. Tortor pretium viverra suspendisse potenti nullam ac.",
        "rating" : 4.5, "category" : "Web Development", "image" : "https://www.jenyalestina.com/blog/wp-content/uploads/2019/05/web-development.jpg"
    },
    {
        "key" : 16, "name" : "Bootstrap 4", "author" : "Colt Steele", price : 10.99, "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Sed augue lacus viverra vitae congue eu consequat ac felis. Erat nam at lectus urna duis convallis convallis tellus.",
        "rating" : 4.5, "category" : "Web Development", "image" : "https://www.jenyalestina.com/blog/wp-content/uploads/2019/05/web-development.jpg"
    },
    {
        "key" : 17, "name" : "SQL Database", "author" : "Adnan Faruque", price : 20.99, "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum suspendisse ultrices gravida dictum fusce ut. Nisl purus in mollis nunc. Volutpat ac tincidunt vitae semper quis lectus nulla. Eu facilisis sed odio morbi quis commodo odio aenean sed.",
        "rating" : 4.5, "category" : "DataBase", "image" : "https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/15493/0712-Bad_Practices_in_Database_Design_-_Are_You_Making_These_Mistakes_Dan_Social-754bc73011e057dc76e55a44a954e0c3.png"
    },
    {
        "key" : 18, "name" : "Machine Learning for Beginners", "author" : "Nova Ahmed", price : 40.99, "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Sed augue lacus viverra vitae congue eu consequat ac felis. Erat nam at lectus urna duis convallis convallis tellus.",
        "rating" : 4.5, "category" : "ML and Data Science", "image" : "https://www.ie.edu/exponential-learning/blog/wp-content/uploads/2018/01/MachineLearninginMarketing-1621x1000.jpg"
    },
    {
        "key" : 19, "name" : "Learn Deep Data with Python","author" : "Nova Ahmed", price : 30.99, "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum suspendisse ultrices gravida dictum fusce ut. Nisl purus in mollis nunc. Volutpat ac tincidunt vitae semper quis lectus nulla. Eu facilisis sed odio morbi quis commodo odio aenean sed.",
        "rating" : 4.5, "category" : "ML and Data Science", "image" : "https://www.ie.edu/exponential-learning/blog/wp-content/uploads/2018/01/MachineLearninginMarketing-1621x1000.jpg"
    }

];

export default courses;

