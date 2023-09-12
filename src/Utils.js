function Utils(){
  function NavArray(){
    return [
      {
        id: 1,
        name: "Home",
      },
      {
        id: 2,
        name: "Job Invites",
      },
      {
        id: 3,
        name: "Analytics",
      },
      {
        id: 4,
        name: "My Profile",
      },
      {
        id: 5,
        name: "Explore",
      }
    ]
  }

  function communitiesFeedAarray() {
    return [
      {
        id: 1,
        name: "Indonesia UI Designer",
        memebers: 734
      },
      {
        id: 2,
        name: "Indonesia UX Resea...",
        memebers: 125
      },
      {
        id: 3,
        name: "Prototyping Club",
        memebers: 891
      },
      {
        id: 4,
        name: "Indonesia UI Designer",
        memebers: 241
      }
    ]
  }

  function footerArray(){
    return [
      {
        id: 1,
        name: "About",
      },
      {
        id: 2,
        name: "Accessibility",
      },
      {
        id: 3,
        name: "Help",
      },
      {
        id: 4,
        name: "Privacy & Terms",
      },
      {
        id: 5,
        name: "Advertise",
      },
      {
        id: 6,
        name: "more",
      }
    ]
  }

  function headlines(){
    return [
      {
        id: 1,
        name: "About",
      },
      {
        id: 2,
        name: "Skills & Certificates",
      },
      {
        id: 3,
        name: "Posts",
      },
      {
        id: 4,
        name: "Spaces",
      },
    ]
  }

  function Experience(){
    return [
      {
        id: 1,
        name: "Crisis Intervention Specialist",
        date: "January 2023 - Present",
        company: "Icoderz- Ahemadbad, India",
        desc: "Work with clients and web studios as freelancer, Work in the next areas: eCommerce web projects; creative lading pages; iOs and Android apps; Corporate web sites and coroprate identity sometimes."
      },
      {
        id: 2,
        name: "B.E Electronics and Telecommunication Engg.",
        date: "August 2015 - June 2019",
        company: "SBJITMR- Nagpur, India",
        desc: null
      },
    ]
  }

  return{
    NavArray, communitiesFeedAarray, footerArray, headlines, Experience
  }
}

export default Utils;