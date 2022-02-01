const size = {
    sm: '400px',
    md: '800px',
    lg: '1250px',
    tall: '1200px',
}
const device = {
    sm: `(max-width: ${size.sm})`,
    md: `(min-width: ${size.md})`,
    lg: `(min-width: ${size.lg})`,
    tall: `(min-height: ${size.tall})`,
}
export default {size, device}