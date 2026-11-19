import "./Reviews.css";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Aarav Sharma",
      profession: "Software Engineer",
      review:
        "Groww makes investing incredibly simple. The clean interface and smooth experience make managing my investments effortless.",
    },
    {
      id: 2,
      name: "Priya Verma",
      profession: "Chartered Accountant",
      review:
        "I love how easy it is to track my portfolio and explore different investment options in one place.",
    },
    {
      id: 3,
      name: "Rahul Mehta",
      profession: "Business Analyst",
      review:
        "A beginner-friendly platform with everything I need. Investing in mutual funds has never felt this convenient.",
    },
    {
      id: 4,
      name: "Ananya Gupta",
      profession: "Graphic Designer",
      review:
        "The interface is beautiful and intuitive. I can easily monitor my investments without getting overwhelmed.",
    },
    {
      id: 5,
      name: "Rohan Kapoor",
      profession: "Digital Marketer",
      review:
        "Groww has made my investment journey much easier. I especially appreciate its simple navigation and real-time updates.",
    },
    {
      id: 6,
      name: "Sneha Iyer",
      profession: "Teacher",
      review:
        "I started investing with very little knowledge, and Groww made the entire process comfortable and straightforward.",
    },
    {
      id: 7,
      name: "Vikram Singh",
      profession: "Entrepreneur",
      review:
        "A reliable and convenient platform for keeping track of investments. The overall user experience is excellent.",
    },
    {
      id: 8,
      name: "Kavya Nair",
      profession: "UI/UX Designer",
      review:
        "Everything feels well-organized and easy to access. The minimal design makes managing my portfolio a pleasant experience.",
    },
  ];

  return (
    <div className="reviews">
      <h1>Trusted by 130,834,586+ Indians</h1>
      <div className="container">
        {reviews.map((user, index) => (
          <div key={index} className="card">
            <p>{user.review}</p>
            <div className="user">
              <b>{user.name}</b>
              <p>{user.profession}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;