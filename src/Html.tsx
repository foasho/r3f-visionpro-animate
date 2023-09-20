import tunnel from 'tunnel-rat';

export const dom = tunnel();

export const Html = () => {

  return (
    <>
      <dom.Out />
    </>
  )
}