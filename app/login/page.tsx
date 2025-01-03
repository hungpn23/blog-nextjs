import { LoginForm } from "@/components/client-components/login-form";
import { SignUpForm } from "@/components/client-components/signup-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LoginPage() {
  return (
    <main className="mt-12 flex w-full items-center justify-center">
      <div className="w-full max-w-sm">
        <Tabs defaultValue="login">
          <TabsList className="mb-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign up</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm />
          </TabsContent>
          <TabsContent value="signup">
            <SignUpForm />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
