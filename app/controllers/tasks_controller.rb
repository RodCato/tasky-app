class TasksController < ApplicationController
  def index
    @tasks = Task.all
    @task = Task.new
  end

  def show
    @task = Task.find(params[:id])
  end

  def new
    @task = Task.new
  end

  def create
    @task = Task.new(task_params)

    respond_to do |format|
      if @task.save
        format.html { redirect_to tasks_url, notice: "Task was successfully created." }
      else
        format.html { render :new, status: :unprocessable_entity }
      end
    end
  end

  def edit
    @task = Task.find(params[:id])
  end

  def update
    @task = Task.find(params[:id])

    respond_to do |format|
      if @task.update(task_params)
        format.html { redirect_to tasks_url, notice: "Task was successfully updated." }
      else
        format.html { render :edit, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @task = Task.find(params[:id])

    if @task.destroy
      flash[:notice] = "Task was successfully deleted."
    else
      flash[:alert] = "Error occurred while destroying task."
    end

    respond_to do |format|
      format.html { redirect_to tasks_url }
      format.json { head :no_content }
    end
  end

  # PROBABLY can do without the toggle for now until I get the deletion problem fixed
 def toggle
  @task = Task.find(params[:id])
  if @task.update(completed: !@task.completed)
    flash[:notice] = "Task was successfully completed."
  else
    flash[:alert] = "An error occurred while completing the task."
  end
  redirect_to tasks_url
end
  private

  def task_params
    params.require(:task).permit(:description, :due_date)
  end
end
