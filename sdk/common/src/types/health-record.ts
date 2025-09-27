/**
 * Minimal shape of a Health record, enforced across flavors.
 */
export interface HealthRecord {
  id: number | string;
  status: string;
  metadata?: Record<string, unknown> | null;
  lastChecked?: Date;
}
