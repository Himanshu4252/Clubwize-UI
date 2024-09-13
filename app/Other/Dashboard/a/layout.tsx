import MyChat from "@/app/Components/Dashboard/MyChat/MyChat";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
return (
<div className="inline-flex gap-4 w-full">

<div className="w-9/12 w-">
{children}
</div>
<div className="w-3/12 mr-4">
<MyChat />
</div>

</div>
);
}