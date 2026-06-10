import { useEffect, useState } from "react";
import { mockAuth, MockUser } from "@/lib/mockAuth";

export function useMockAuth() {
  const [user, setUser] = useState<MockUser | null>(() => mockAuth.getUser());
  useEffect(() => mockAuth.subscribe(() => setUser(mockAuth.getUser())), []);
  return user;
}
