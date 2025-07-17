from datetime import datetime, timedelta
from airflow import DAG
from airflow.operators.bash import BashOperator


default_args = {
        'owner': 'niggue',
        'retries': 3,
        'retries_delay': timedelta(minutes=2)
        }


with DAG(
        dag_id='xampl_1',
        default_args=default_args,
        description='this is just a test dag',
        start_date=datetime(2022, 9, 23, 12),
        schedule_interval='@daily'
) as dag:
    
    task1 = BashOperator(
            task_id='first_task',
            bash_command="printf \"this is the first command on the task!\"",
            dag=dag
            )

    task2 = BashOperator(
            task_id='second_task',
            bash_command='echo 2 task!',
            dag=dag
            )
    
    task3 = BashOperator(
            task_id='third_task',
            bash_command="echo final task!",
            dag=dag
            )

task1 >> task2 >> task3

### another way to declare the above is as follows

# task1.set_downstream(task2)
# task2.set_downstream(task3)

### or even there's other one to do it

# task1 >> [task2, task3]

# task1 >> task2
# task1 >> task3






