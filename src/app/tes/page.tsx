export default async function Page() {
  const res = await fetch("https://api.example.com/invalid-endpoint", { cache: 'no-store' });

  if (!res.ok) {
    throw new Error("Gagal ambil data");
  }

  return <div>Data berhasil</div>;
}