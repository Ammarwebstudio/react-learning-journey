import "./App.css";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <div className="profile-wrapper">
        <Profile
          title="Shera Raye"
          description="UI/UX designer focused on simple, usable, & intuitive experiences"
          followers="88"
          projects="76"
          image="https://plus.unsplash.com/premium_photo-1690395794791-e85944b25c0f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        />
        <Profile
          title="Ayaan Malik"
          description="Frontend developer focused on fast, accessible, & polished layouts"
          followers="24"
          projects="65"
          image="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        />
        <Profile
          title="Zara Hussain"
          description="Product manager focused on clear, shippable, & useful products"
          followers="97"
          projects="78"
          image="https://plus.unsplash.com/premium_photo-1690394943834-8f9491b750f9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        />
        <Profile
          title="Daniyal Qureshi"
          description="Backend engineer focused on scalable, secure, & reliable systems"
          followers="42"
          projects="23"
          image="https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        />
      </div>
    </>
  );
}

export default App;
