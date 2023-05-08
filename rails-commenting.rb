# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This is the model for Blog_Post (or BlogPost). It's generated into a controller to transfer CRUD abilities from the model to view.
class BlogPostsController < ApplicationController
  def index
    # ---2) '@posts' is a key instance assigned to 'BlogPost.all' which will display all data in the model. This will appear in the 'index.html.erb' view when '@posts' is called. This is a GET action and will display a view.
    @posts = BlogPost.all
  end

  # ---3) '@post' is a key instance assigned to 'BlogPost.find(param[:id])'. This will display an instance of 'BlogPost' depending on the ':id' that is being routed. This will display the instance on the 'show.html.erb' show when '@post' is called. This is a GET action and will display a view.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) '@post' is a key instance assigned to 'BlogPost.new' that will create a new instance of 'BlogPost' by routing through the 'create' method. If an instance is created, it will be displayed in the 'index' view, and will be assigned an 'id'. This is a GET action and will display a view.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) '@post' is a key instance assigned to 'BlogPost.create(blog_post_params) that allows us to perfrom a create action. A strong params is passed through as an argument to make sure the new instance meets a criteria. It also has an 'if' statement that will redirect the user to the post if its valid. This is a POST action.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) '@post' is a key instance assigned to 'BlogPost.find(params[:id]) that will allow us to access an instance of 'BlogPost' via an id. This will allow a user to edit a post via the 'update' method. This is a GET action.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) '@post' is a key instance assigned to 'BlogPost.find(params[:id]) that allows us to update an existing instance of 'BlogPost'. It passes the strong params as an argument to make sure the updated information meets criteria. If it is valid, it will redirect the user to the updated post. This is a PATCH action.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)'@post' is a key instance of 'BlogPost.find(params[:id])' that locates an instance of 'BlogPost' by its id. It allows us to delete an instance. This is a DELETE action.
      redirect_to blog_posts_path
    end
  end

  # ---9) 'private' makes all code after it only accesible within the context of the current object.
  private
  def blog_post_params
    # ---10) 'params.require' is a built-in method followed by the symbol ':blog_post' that correlates to our model table. '.permit' is another built-in method that chains along to pass what symbols are required; in this case its ':title'  and ':content'.
    params.require(:blog_post).permit(:title, :content)
  end
end
