export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-foreground"></div>
        <p className="text-muted-foreground">Loading portfolio...</p>
      </div>
    </div>
  );
}
