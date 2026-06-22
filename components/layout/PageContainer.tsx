interface Props {
  children: React.ReactNode;
}

export default function PageContainer({ children }: Props) {
  return (
    <main className="min-h-screen bg-[#2b0d17] text-white overflow-x-hidden">
      {children}
    </main>
  );
}