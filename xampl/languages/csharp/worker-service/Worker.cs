namespace worker_service;

public class Worker : BackgroundService
{
	private readonly ILogger<Worker> _logger;

	public Worker(ILogger<Worker> logger)
	{
		_logger = logger;
	}

	public override async Task StartAsync(CancellationToken stoppingToken)
	{
		_logger.LogInformation("Worker is BEGINS at: {time}", DateTimeOffset.Now);
		await Task.Delay(1000, stoppingToken);
	}

	protected override async Task ExecuteAsync(CancellationToken stoppingToken)
	{
		while (!stoppingToken.IsCancellationRequested)
		{
			_logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);
			await Task.Delay(1000, stoppingToken);
		}
	}

	public override async Task StopAsync(CancellationToken stoppingToken)
	{
		await Task.Delay(1000, stoppingToken);
		_logger.LogInformation("Worker is GONE at time: {time}", DateTimeOffset.Now);
	}
}
