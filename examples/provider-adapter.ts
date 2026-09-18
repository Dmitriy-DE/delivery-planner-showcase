/**
 * Sanitised illustrative example.
 * It demonstrates the provider boundary; it is not copied from the private codebase.
 */

export type Capability = "projects" | "workItems" | "worklogs";

export interface ProviderCapabilities {
  provider: string;
  available: Capability[];
  unavailable: Capability[];
}

export interface ExecutionProvider {
  capabilities(): Promise<ProviderCapabilities>;
  listProjects(): Promise<Array<{ id: string; name: string }>>;
  listWorkItems(projectId: string): Promise<Array<{
    id: string;
    title: string;
    assigneeId: string | null;
    updatedAt: string;
  }>>;
}

export async function requireCapability(
  provider: ExecutionProvider,
  capability: Capability,
): Promise<void> {
  const state = await provider.capabilities();

  if (!state.available.includes(capability)) {
    throw new Error(
      `Provider capability "${capability}" is unavailable; no silent fallback is allowed.`,
    );
  }
}
