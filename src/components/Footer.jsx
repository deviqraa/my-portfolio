
export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-slate-400">
      <p>
        © {new Date().getFullYear()} Iqra Manzoor. Built with React.
      </p>

      <p className="mt-2 text-xs text-slate-500">
        Learning, creating and growing one step at a time.
      </p>
    </footer>
  );
}
