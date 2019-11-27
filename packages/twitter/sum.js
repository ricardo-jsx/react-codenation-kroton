export default function (...args) {
    return args.reduce((acc, number) => acc + number, 0);
}