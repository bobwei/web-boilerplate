const fn = async (req, res) => {
  const paths = (req.query.paths ?? '').split(',');
  try {
    const revalidatedPaths = [];
    const errorPaths = [];
    for (const path of paths) {
      await res
        .revalidate(path)
        .then(() => {
          revalidatedPaths.push(path);
        })
        .catch(() => {
          errorPaths.push(path);
        });
    }
    res.setHeader('Cache-Control', 'no-store').json({
      revalidatedPaths,
      errorPaths,
    });
  } catch (error) {
    res.status(400).json({ error: error + '' });
  }
};

export default fn;
