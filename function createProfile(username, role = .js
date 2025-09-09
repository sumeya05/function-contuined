function createProfile(username, role = "user", isActive = true) {
  return {
    username: username,
    role: role,
    isActive: isActive,
  };
}
const profile1 = createProfile("john123");
console.log(profile1);

const profile2 = createProfile("admin456", "administrator");
console.log(profile2);

const profile3 = createProfile("guest789", "guest", false);
console.log(profile3);

// they allow function to work even if an arguments are not there.

//  the output will be undefined

// they reduce errors
