export async function getServerSideProps({ res }) {
  const merchant_id = "OK2518682";
  const merchant_code = "197329717514274362518682OKCT6B029ED3A2D286F549854A70C3E8F1D5"

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
