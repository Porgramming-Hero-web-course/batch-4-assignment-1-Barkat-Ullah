interface Profile {
  name: string;
  age: number;
  email: string;
}
type PartialProfile = Partial<Profile>;
function updateProfile(profile: Profile, update: PartialProfile) {
  return { ...profile, ...update };
}

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(updateProfile(myProfile, { age: 89 }));
