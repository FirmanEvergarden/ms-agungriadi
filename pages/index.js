export async function getServerSideProps({ res }) {
  const merchant_id = "OK2423358";
  const merchant_code = "457289017466854822423358OKCTEFD8A0745371DCAC9956F8BABB8CFB48"

  try {
    const apiRes = await fetch(
      `https://gateway.okeconnect.com/api/mutasi/qris/${merchant_id}/${merchant_code}`
    );

    if (!apiRes.ok) {
      throw new Error(`Fetch failed: ${apiRes.status}`);
    }

    const data = await apiRes.json();

    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(data));
    res.end();

    return { props: {} };
  } catch (error) {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 500;
    res.write(JSON.stringify({ error: error.message }));
    res.end();

    return { props: {} };
  }
}

export default function EmptyPage() {
  return null;
}
