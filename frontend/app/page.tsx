export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <h1>Template Next.js アプリ</h1>
      <p>このページを編集して開発を開始できます。</p>
      <code>env-template/frontend/app/page.tsx</code>
    </main>
  );
}

